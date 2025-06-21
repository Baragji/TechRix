# 📁 TechFlows Project Structure

## ✅ Clean & Organized Structure (Following Next.js Best Practices)

```
TechFlows-main/
├── 📂 src/                     # Source code
│   ├── 🎯 app/                 # Next.js app router pages
│   ├── 🧩 components/          # React components
│   ├── 🪝 hooks/               # Custom React hooks
│   ├── 📚 lib/                 # Utility libraries
│   ├── 🎨 styles/              # Styling files
│   ├── 📋 types/               # TypeScript definitions
│   └── 🔧 utils/               # Helper functions
│
├── 🌐 public/                  # Static assets
│   ├── 🖼️ images/              # Image assets
│   ├── 📄 manifest.json        # PWA manifest
│   └── ⚙️ sw.js                # Service worker
│
├── ⚙️ config/                  # Configuration files
│   ├── 🚀 deployment/          # Deployment configs
│   │   └── netlify.toml        # Netlify configuration
│   ├── 🧪 jest/                # Testing configuration
│   │   ├── jest.config.mjs     # Jest main config
│   │   └── jest.setup.js       # Jest setup file
│   ├── ✨ prettier/            # Code formatting
│   │   ├── .prettierignore     # Prettier ignore patterns
│   │   └── .prettierrc.json    # Prettier configuration
│   ├── .htmlvalidate.json      # HTML validation
│   ├── .lintstagedrc.json      # Lint-staged config
│   └── .pa11yrc.json           # Accessibility testing
│
├── 🛠️ tools/                   # Development tools
│   ├── 📜 scripts/             # Build & development scripts
│   │   ├── clear-dev-cache.js  # Cache clearing
│   │   ├── health-check.js     # System health check
│   │   ├── optimize.js         # Performance optimization
│   │   └── validate-images.js  # Image validation
│   ├── 🧪 testing/             # Test utilities & setup
│   │   ├── 📋 docs/            # Testing documentation
│   │   ├── ⚙️ config/          # Test configurations
│   │   ├── 📜 scripts/         # Testing scripts
│   │   └── 📄 templates/       # Test templates
│   └── 🐛 debugging/           # Debug tools & logs
│       ├── Debugbattle/        # Debug session logs
│       ├── Udseende/           # UI debugging
│       └── Verceldeployment/   # Deployment debugging
│
├── 📚 docs/                    # Documentation
│   ├── 🏗️ architecture/        # Architecture documentation
│   ├── 💻 development/         # Development guides
│   ├── 📖 guides/              # User guides
│   ├── 🗂️ Legacy/              # Legacy documentation
│   └── 🔄 .workflow/           # Workflow documentation
│
├── 🗂️ __mocks__/               # Jest mocks
├── 🏗️ .devcontainer/          # Dev container config
├── 🔧 .github/                 # GitHub workflows & config
├── 💻 .vscode/                 # VS Code settings
├── 🎯 .husky/                  # Git hooks
└── 📄 Configuration Files      # Root level configs
    ├── next.config.ts          # Next.js configuration
    ├── tailwind.config.ts      # Tailwind CSS config
    ├── postcss.config.mjs      # PostCSS configuration
    ├── eslint.config.mjs       # ESLint configuration
    ├── tsconfig.json           # TypeScript main config
    ├── tsconfig.eslint.json    # TypeScript for ESLint
    ├── tsconfig.lint.json      # TypeScript for linting
    ├── package.json            # Dependencies & scripts
    └── .gitignore              # Git ignore patterns
```

## 🎯 Key Improvements Made

### ✅ **Organization Benefits:**
- **Clear separation** of concerns
- **Logical grouping** of related files
- **Easy navigation** and maintenance
- **Follows Next.js** best practices
- **Scalable structure** for future growth

### 🚀 **Development Benefits:**
- **Faster development** with organized structure
- **Easier onboarding** for new developers
- **Better maintainability** long-term
- **Clear file location** expectations
- **Reduced cognitive load** when navigating

### 🛠️ **Tool Benefits:**
- **Centralized configurations** in `/config`
- **Development tools** organized in `/tools`
- **Documentation** properly structured in `/docs`
- **Easy script management** with updated paths
- **Better IDE support** with organized structure

## 📋 Quick Navigation

| What you need | Where to find it |
|---------------|------------------|
| **Pages & Routes** | `src/app/` |
| **Components** | `src/components/` |
| **Styling** | `src/styles/` |
| **Development Scripts** | `tools/scripts/` |
| **Configuration** | `config/` |
| **Documentation** | `docs/` |
| **Testing Setup** | `tools/testing/` |
| **Debug Tools** | `tools/debugging/` |

---
*This structure follows Next.js 15 best practices and modern development standards.*
