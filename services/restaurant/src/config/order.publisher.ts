import { getChannel } from "./rabbitmq.js";

export const publishEvent = async (type: string, data: any) => {
  const channel = getChannel();

  if (!channel) {
    throw new Error(
      "RabbitMQ channel not available. Is RabbitMQ running and connected?"
    );
  }

  channel.sendToQueue(
    process.env.ORDER_READY_QUEUE!,
    Buffer.from(JSON.stringify({ type, data })),
    { persistent: true }
  );
};
