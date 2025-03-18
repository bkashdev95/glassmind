<!-- @format -->

# Glassmind MVP7c

This application code is the proprietary property of Glassmind AI Inc, a Delaware corporation.
Uses React 17.0.2 / NextJS 12.3.3 / Deployed on Amplify

## Architecture Overview

### Frontend Architecture

The application uses a modern React-based frontend architecture:

- **Next.js Framework**: Provides server-side rendering, routing, and development environment
- **React**: Component-based UI library (version 17.0.2)
- **State Management**: Uses React's built-in state management (no Redux or other external state management libraries)
- **UI Components**: 
  - React Bootstrap for responsive layout and components
  - Custom components organized in a component-based architecture
  - Feather icons for iconography
- **Styling**: SASS/SCSS for advanced styling capabilities
- **Form Handling**: Various React libraries for form elements (react-select, react-textarea-autosize)
- **Data Visualization**: React components for displaying data (react-table)
- **File Handling**: react-dropzone for file uploads

The frontend is organized into several key directories:
- `/components`: Reusable UI components
- `/pages`: Next.js page components (file-based routing)
- `/widgets`: Higher-level component compositions
- `/modals`: Modal dialog components
- `/styles`: SCSS styling files
- `/public`: Static assets

### Backend Architecture

The backend is built using AWS Amplify, which provides a serverless architecture:

- **AWS AppSync**: GraphQL API service that connects the frontend to backend services
- **Authentication**: AWS Cognito for user authentication, authorization, and user pool management
  - Email-based signup
  - User pool groups for role-based access (SuperAdmin, GmAdmin)
  - Password policies and verification mechanisms
- **Data Storage**: 
  - DynamoDB (implied by Amplify's default database for @model directive)
  - S3 for file storage
- **API Layer**: GraphQL schema defining the data models and relationships
  - Models include User, Client, and Company
  - Public access rules defined for these models

### Data Flow

1. Frontend components make GraphQL queries/mutations to the AppSync API
2. AppSync authenticates requests using API keys or AWS IAM
3. AppSync resolvers process the requests and interact with DynamoDB
4. Data is returned to the frontend and rendered in the UI components

This architecture provides a scalable, serverless solution with built-in authentication and authorization capabilities.

## Getting Started

The steps to compile and get started with development are covered in detail in documentation mentioned above, but the summary is:

- npm install --force
- npm run dev
- npm run build
