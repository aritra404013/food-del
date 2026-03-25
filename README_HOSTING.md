# Hosting Setup Guide (HostMyIdea / cPanel)

Follow these steps to deploy your food delivery ecosystem on HostMyIdea:

## 1. Prepare External Services (Free Tiers)
Since shared hosting doesn't allow installing MongoDB or RabbitMQ:
-   **MongoDB**: Sign up for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) (Free Shared Cluster).
-   **RabbitMQ**: Sign up for [CloudAMQP](https://www.cloudamqp.com/plans.html) (Little Lemur plan - Free).

## 2. Server Setup (via cPanel Terminal)
Open the **Terminal** in your cPanel and run:
```bash
# Clone your repository
git clone https://github.com/aritra404013/food-del.git
cd food-del

# Install pnpm locally (Fail-safe for cPanel)
npm install pnpm

# Go to the root folder
cd ~/food-del

# Set a permanent absolute alias for pnpm
echo "alias pnpm=\"$(pwd)/node_modules/.bin/pnpm\"" >> ~/.bashrc
source ~/.bashrc

# Now 'pnpm' will work from ANY folder!
pnpm --version

# Install dependencies for all services
pnpm install
```

## 3. Configuration (.env files)
You must create `.env` files for each service on the server. Change `localhost` to your MongoDB Atlas and CloudAMQP URLs.

## 4. Launch with PM2
In the terminal, run:
```bash
# Install PM2 globally
pnpm install -g pm2

# Start all services
pm2 start ecosystem.config.cjs

# Keep them running after reboot
pm2 startup
pm2 save
```

## 5. Frontend Deployment
1.  Run `pnpm run build` in your local project's `frontend` folder.
2.  Upload the contents of the `frontend/dist` folder to your cPanel's `public_html`.

## 6. Routing (Important)
If your cPanel host blocks ports 5000-5006 for public traffic, you will need to set up **Subdomains** or use cPanel's **Application Manager** to proxy requests.
