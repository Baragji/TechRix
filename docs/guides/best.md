# TechFlow Solutions - Development Best Practices

## Component Architecture & Structure

### Component Organization
Use functional components with TypeScript interfaces for all React components
Export components as default exports with named interface exports
Place component-specific types in the same file as the component

```typescript
interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, index }) => {
  // Component implementation
};

export default BlogPostCard;
```

### Component Naming Conventions
Use PascalCase for component names and file names
Use descriptive names that clearly indicate the component's purpose
Prefix UI components with their category (e.g., BlogGrid, TestimonialsCarousel)

```typescript
// Good
const TestimonialsCarousel: React.FC = () => { ... };
const PriceCalculator: React.FC = () => { ... };

// Component files
src/components/sections/BlogGrid.tsx
src/components/ui/Button.tsx
```

## Tailwind CSS v4 (2025) Best Practices

### CSS-First Configuration
Tailwind v4 introduces CSS-first configuration, moving away from JavaScript config files
Configure your design system directly in CSS using the @theme directive

```css
@import "tailwindcss";

@theme {
  --font-display: "Satoshi", "sans-serif";
  --breakpoint-3xl: 1920px;
  --color-brand-primary: oklch(0.84 0.18 117.33);
  --color-brand-secondary: oklch(0.53 0.12 118.34);
  --spacing-custom: 0.25rem;
  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);
}
```

### CSS Theme Variables
All design tokens are automatically exposed as CSS variables, accessible at runtime

```css
:root {
  --font-display: "Satoshi", "sans-serif";
  --color-brand-primary: oklch(0.84 0.18 117.33);
  --spacing-custom: 0.25rem;
}
```

### Modern CSS Features Integration
Tailwind v4 leverages cutting-edge CSS features for better performance and functionality

```css
/* Native cascade layers */
@layer theme, base, components, utilities;

/* Registered custom properties with @property */
@property --tw-gradient-from {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}

/* color-mix() for opacity adjustments */
.bg-blue-500\/50 {
  background-color: color-mix(in oklab, var(--color-blue-500) 50%, transparent);
}
```

### Glass Morphism and Modern Effects
Utilize Tailwind v4's enhanced backdrop filters for glass effects
Create consistent glass morphism patterns across components

```tsx
// Modern glass effect implementation
<motion.nav
  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl"
  style={{ '--navbar-height': '72px' } as React.CSSProperties}
>
```

### Dynamic Utility Values
Tailwind v4 supports dynamic values without configuration

```tsx
// Grid utilities accept any value
<div className="grid-cols-17 gap-23">

// Spacing utilities are dynamically calculated
<div className="mt-29 px-47 w-83">

// Data attributes work out of the box
<div className="data-[loading=true]:opacity-50">
```

### Modernized P3 Color Palette
Updated color palette using OKLCH for wider gamut support

```css
/* Enhanced colors with better vibrancy */
.text-blue-500 { color: oklch(0.6 0.25 250); }
.bg-red-600 { background-color: oklch(0.55 0.22 25); }
```

### Container Queries
Built-in container query support without plugins

```tsx
<div className="@container">
  <div className="@sm:grid-cols-2 @lg:grid-cols-3">
    {/* Content adapts to container size */}
  </div>
</div>

// Max-width container queries
<div className="@max-md:hidden @min-lg:@max-xl:flex">
```

### Expanded Gradient APIs
Enhanced gradient utilities with angles and interpolation modes

```tsx
// Linear gradients with angles
<div className="bg-linear-45 from-blue-500 to-purple-600">

// Gradient interpolation modes
<div className="bg-linear-to-r/oklch from-red-500 to-blue-500">

// Conic and radial gradients
<div className="bg-conic-from-center from-yellow-400 to-red-500">
<div className="bg-radial-at-center from-green-400 to-blue-500">
```

### 3D Transform Utilities
New 3D transformation capabilities

```tsx
<div className="transform-style-preserve-3d rotate-x-45 rotate-y-30 translate-z-10">
  <div className="perspective-1000 perspective-origin-center">
    {/* 3D transformed content */}
  </div>
</div>
```

## Animation and Motion Patterns

### Framer Motion Integration
Use consistent animation patterns across components
Implement staggered animations for list items with index-based delays

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  viewport={{ once: true }}
>
```

### Animation Timing Standards
Use consistent duration values for different interaction types

```tsx
// Standard animation patterns
transition={{ duration: 0.2 }} // Hover effects
transition={{ duration: 0.6 }} // Content reveals
transition={{ duration: 0.8 }} // Section entrances
```

### @starting-style Support
Use the new starting variant for enter/exit transitions without JavaScript

```tsx
<div className="starting:opacity-0 starting:scale-95 transition-all duration-300">
  {/* Content that animates in when first displayed */}
</div>
```

## State Management Patterns

### React Hooks Usage
Use useState for local component state
Implement useCallback for expensive calculations and event handlers
Use useEffect with proper cleanup for side effects

```tsx
const [selectedCategory, setSelectedCategory] = useState<string>('all');
const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(allPosts);

const calculatePrice = useCallback(() => {
  // Expensive calculation logic
}, [selectedProjectType, selectedOptions, selectedTimeline]);

useEffect(() => {
  calculatePrice();
}, [calculatePrice]);
```

### Event Handler Patterns
Use arrow functions for inline event handlers
Implement proper event propagation control

```tsx
onClick={(e) => {
  e.stopPropagation();
  setActiveDropdown(activeDropdown === 'services' ? null : 'services');
}}
```

## Hydration Error Handling

### Client-Side Rendering Guards
Use 'use client' directive for components with browser-specific APIs
Implement proper checks for browser environment

```tsx
'use client';

import { useEffect, useState } from 'react';

function ClientOnlyComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Browser-specific code with proper guards
    if (typeof window !== 'undefined') {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Handle keyboard events
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, []);

  if (!mounted) return null;

  return <div>Client-only content</div>;
}
```

### Dynamic Imports for Client Components
Use Next.js dynamic imports for components that cause hydration issues
Implement loading states for dynamically imported components

```tsx
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./ClientOnlyComponent'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 rounded h-48 w-full">Loading...</div>
});
```

### Consistent Initial States
Avoid conditional rendering that differs between server and client
Use consistent initial states that match server-side rendering

```tsx
function ConsistentComponent() {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<string>('');

  useEffect(() => {
    setMounted(true);
    // Only set dynamic data after mounting
    setData(new Date().toISOString());
  }, []);

  return (
    <div>
      {mounted ? data : 'Loading...'}
    </div>
  );
}
```

### useEffect for Dynamic Content
Use useEffect hook to handle time-sensitive or browser-dependent content

```tsx
function TimeComponent() {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
    
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Current time: {currentTime}</div>;
}
```

### Suppress Hydration Warning (Last Resort)
Use suppressHydrationWarning sparingly for unavoidable mismatches

```tsx
<div suppressHydrationWarning>
  {new Date().toLocaleTimeString()}
</div>
```

## Data Fetching and API Patterns

### Type-Safe Data Structures
Define comprehensive TypeScript interfaces for all data structures
Use consistent naming conventions for data types

```tsx
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  image: string;
}
```

### API Route Implementation
Use proper HTTP status codes and error handling
Implement consistent response formats

```tsx
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ dimensions: string[] }> }
) {
  const { dimensions } = await params;
  
  // Input validation
  const width = Math.min(Math.max(parseInt(dimensions[0]), 1), 2000);
  const height = Math.min(Math.max(parseInt(dimensions[1]), 1), 2000);

  const svg = generateSVG(width, height);

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
```

## Icon and Asset Management

### Icon Component Pattern
Use a centralized Icon component with string-based name props
Implement fallback icons for missing icon names

```tsx
const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 'md', variant = 'default', className, ...props }, ref) => {
    const sizeClasses = {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-8 h-8',
    };

    return (
      <svg
        ref={ref}
        className={cn(sizeClasses[size], variantClasses[variant], className)}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        {icons[name as keyof typeof icons] || icons['arrow-right']}
      </svg>
    );
  }
);
```

### Image Optimization
Use Next.js Image component with proper sizing and loading strategies
Implement consistent fallback images

```tsx
<Image
  src={imageUrl || "/images/events/default-event.svg"}
  alt={title}
  width={800}
  height={600}
  className="w-full h-48 object-cover"
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
/>
```

## Form and User Input Handling

### Input Component Patterns
Use controlled components with proper TypeScript typing
Implement consistent styling and interaction patterns

```tsx
<input
  type="text"
  placeholder="Search articles..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
/>
```

### Button Component Variants
Use class-variance-authority for consistent button styling
Implement multiple variants with proper TypeScript support

```tsx
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white/20 text-white shadow rounded-2xl backdrop-blur-sm',
        glass: 'bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20',
        gradient: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-purple-600 hover:to-blue-500',
      },
      size: {
        default: 'h-9 px-4 py-2',
        lg: 'h-10 rounded-md px-8',
        xl: 'h-12 rounded-lg px-10 text-base',
      },
    },
  }
);
```

## Navigation and Routing

### Navigation State Management
Use consistent patterns for active states and dropdown management
Implement proper keyboard navigation support

```tsx
const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
const pathname = usePathname();

// Close dropdown on escape key
useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setActiveDropdown(null);
    }
  };

  if (typeof document !== 'undefined') {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }
}, []);
```

### Link Component Usage
Use Next.js Link component for internal navigation
Implement proper external link handling

```tsx
<Link
  href={item.href}
  className={`text-sm font-normal transition-all duration-300 ${
    pathname === item.href ? 'text-white' : 'text-white/90 hover:text-white/70'
  }`}
>
  {item.label}
</Link>
```

## Error Handling and Loading States

### Graceful Error Handling
Implement proper error boundaries and fallback UI
Use consistent error message patterns

```tsx
// Empty state handling
{filteredPosts.length === 0 && (
  <motion.div
    className="text-center py-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
      <TagIcon className="w-12 h-12 text-white/50" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">
      No articles found
    </h3>
    <p className="text-white/70 mb-8">
      Try adjusting your search criteria or select a different category.
    </p>
  </motion.div>
)}
```

### Loading State Patterns
Use skeleton loaders and proper loading indicators
Implement consistent loading state styling

```tsx
const DynamicComponent = dynamic(() => import('./Component'), {
  loading: () => (
    <div className="animate-pulse bg-white/10 backdrop-blur-sm rounded-xl h-48 w-full" />
  ),
});
```

## Performance Optimization

### Component Memoization
Use React.memo for components that receive stable props
Implement proper dependency arrays for hooks

```tsx
const MemoizedComponent = React.memo<ComponentProps>(({ data, onAction }) => {
  const memoizedValue = useMemo(() => {
    return expensiveCalculation(data);
  }, [data]);

  return <div>{memoizedValue}</div>;
});
```

### Image and Asset Optimization
Use appropriate image formats and sizes
Implement lazy loading for non-critical images

```tsx
<Image
  src="/api/placeholder/800/400"
  alt="Placeholder"
  width={800}
  height={400}
  className="w-full h-48 object-cover"
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

## Accessibility Best Practices

### Semantic HTML and ARIA
Use proper semantic HTML elements
Implement ARIA labels for complex interactions

```tsx
<motion.nav
  className="fixed top-5 left-0 w-full z-50"
  aria-label="Main navigation"
>
  <button
    aria-expanded={activeDropdown === 'services'}
    aria-haspopup="true"
    className="flex items-center"
  >
    Services
  </button>
</motion.nav>
```

### Keyboard Navigation
Implement proper focus management
Support keyboard navigation for all interactive elements

```tsx
<div
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleAction();
    }
  }}
  onClick={handleAction}
>
```

## Testing and Quality Assurance

### Component Testing Patterns
Write tests for critical user interactions
Use proper test data and mocking strategies

```tsx
// Test data patterns
const mockBlogPost: BlogPost = {
  id: 'test-1',
  title: 'Test Article',
  slug: 'test-article',
  excerpt: 'Test excerpt',
  // ... other required fields
};
```

### Type Safety Enforcement
Use strict TypeScript configuration
Implement proper type guards for runtime validation

```tsx
interface TypedProps {
  data: BlogPost[];
  onFilter: (category: string) => void;
}

const isValidBlogPost = (post: unknown): post is BlogPost => {
  return typeof post === 'object' &&
         post !== null &&
         'id' in post &&
         'title' in post;
};
```

## Best Practices Summary

### Hydration Error Prevention
1. Use `useEffect` for client-only code (window, document, localStorage)
2. Implement consistent initial states between server and client
3. Use dynamic imports with `ssr: false` for problematic components
4. Avoid time-dependent or random values in server-rendered components
5. Test thoroughly across different browsers and environments

### Tailwind v4 Optimization
1. Leverage CSS-first configuration for better maintainability
2. Use CSS theme variables for runtime access to design tokens
3. Take advantage of dynamic utility values for flexible layouts
4. Implement modern CSS features like container queries and 3D transforms
5. Use the enhanced gradient and color systems for better visual effects

### Performance Considerations
1. Minimize hydration mismatches to prevent client-side re-rendering
2. Use proper loading states and skeleton components
3. Implement lazy loading for non-critical components
4. Optimize images with Next.js Image component
5. Use React.memo and useMemo for expensive computations

---

*Last updated: January 2025*
*Framework versions: Next.js 15+, React 19+, Tailwind CSS v4+*