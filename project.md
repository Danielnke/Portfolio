# Project Plan: Daniel Nkencho - AI Automation Specialist Portfolio

This document outlines the plan to transform the base portfolio template into a personalized, professional, and futuristic website for Daniel Nkencho.

## 1. Core Identity & Branding

- **Name:** Daniel Nkencho
- **Title:** AI Automation Specialist
- **Core Message:** Helping businesses streamline operations and scale through the implementation of custom AI solutions like AI agents, automations, chatbots, and voice assistants.

## 2. Design & Aesthetic

- **Overall Feel:** Professional, Futuristic, Minimalist.
- **Color Palette:** A dark-mode theme is recommended to fit the futuristic feel. We can use a base of dark grays or off-black, with a vibrant accent color.
    - **Action Item:** Daniel, what accent color do you prefer? (e.g., Electric Blue, Neon Green, Purple).
- **Typography:** Use the existing `Inter` font, but adjust weights to create a cleaner, more minimalist hierarchy.
- **Logo:** The current `logo.svg` will be updated.
    - **Action Item:** Daniel, do you have a personal logo? If not, we can create a clean text-based logo (e.g., "DN" or "Daniel Nkencho").

## 3. Content & Section Revamp

### a. Hero Section (`/app/sections/Hero.tsx`)

- **Current:** Generic headline.
- **New Headline:** "Daniel Nkencho: AI Automation Specialist"
- **New Sub-headline:** "I build intelligent AI solutions to automate and scale your business."
- **Background:** Replace the current `hero.mp4` with a more abstract, futuristic, and subtle animation.

### b. About Section (`/app/sections/About.tsx`)

- **Current:** Placeholder text.
- **New Bio (Draft):** "As an AI Automation Specialist, I specialize in integrating artificial intelligence into business systems. My goal is to streamline your operations and unlock new opportunities for growth. Whether it's through developing intelligent AI agents, automating repetitive tasks, or creating sophisticated AI chatbots and voice assistants, I provide end-to-end solutions that deliver measurable results."
- **Profile Picture:** Replace `public/karthik.jpeg`.
    - **Action Item:** Daniel, please provide the path to your professional headshot.

### c. Services Section (New or Replaces `Work.tsx`)

We will create a dedicated section to showcase your services.

- **Title:** What I Do
- **Services to List:**
    1.  **AI Agents:** Custom-built agents to handle complex tasks and workflows.
    2.  **AI-Powered Automations:** Streamlining business processes to increase efficiency.
    3.  **AI Chatbots:** Intelligent, 24/7 customer support and lead generation.
    4.  **AI Voice Assistants:** Voice-enabled solutions for enhanced user interaction.
    5.  **AI-Driven Websites:** Creating or enhancing websites with AI capabilities.

### d. Projects Section (`/app/components/work/`)

This section is crucial and will be continuously updated to showcase the latest work. We need to replace the initial placeholder projects.

- **Action Item:** Daniel, please provide details for 2-3 key projects. For each, we need:
    - **Project 1:**
        - **Title:**
        - **Description (1-3 sentences):**
        - **Key Technologies:**
        - **Link (GitHub/Live Demo):**
        - **Image Path:**
    - **Project 2:**
        - **Title:**
        - **Description (1-3 sentences):**
        - **Key Technologies:**
        - **Link (GitHub/Live Demo):**
        - **Image Path:**

### e. Contact & Footer (`/app/sections/Contact.tsx` & `Footer.tsx`)

- **Contact Form:**
    - **Action Item:** Daniel, what email address should the contact form submit to?
- **Social Media:**
    - **Action Item:** Daniel, please provide your social media links (e.g., LinkedIn, GitHub, Twitter/X).

## 4. Implementation Checklist

- [ ] Update text content in `Hero.tsx`, `About.tsx`, and `Footer.tsx`.
- [ ] Create/Update the `Services` section.
- [ ] Update the project details in `app/components/work/projectDetails.ts`.
- [ ] Replace image assets (`karthik.jpeg`, project images, logo).
- [ ] Update color scheme in `tailwind.config.js` and `globals.css`.
- [ ] Update social media links.
- [ ] Test contact form functionality.
