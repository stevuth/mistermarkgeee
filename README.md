# MisterMarkGee — Creative Universe

The official portfolio and blog for Mark Macharia Gaturuku (MisterMarkGee), a content creator, artist manager, videographer, podcaster, and writer based in Birmingham, UK.

## 🚀 Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Database & Auth:** [Firebase](https://firebase.google.com/) (Firestore, Authentication)
- **Image Hosting:** [Cloudinary](https://cloudinary.com/)
- **AI Integration:** [Genkit](https://firebase.google.com/docs/genkit) (Google Gemini)

## ✨ Key Features

- **Dynamic Blog:** Real-time articles powered by Firestore.
- **Admin Dashboard:** Secure area for managing blog posts and account settings.
- **Cloudinary Integration:** Seamless image uploads for blog content.
- **Video Portfolio:** Curated YouTube playlists showcasing videography and podcast work.
- **Responsive Design:** Optimized for all devices with a modern dark-themed aesthetic.
- **Newsletter:** Integrated Zoho Campaigns subscription form.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- A Firebase project
- A Cloudinary account (for image uploads)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables for Cloudinary in your Admin components or a `.env` file.

4. Run the development server:
   ```bash
   npm run dev
   ```

## 🔐 Admin Access

Admin features are restricted to the authorized email: `mark.gaturuk@gmail.com`. Permissions are managed via Firestore Security Rules and a `roles_admin` collection.

## 📄 License

Created by [Stevuth Tech](https://stevuthtech.com) for MisterMarkGee.