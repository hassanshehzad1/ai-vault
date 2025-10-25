import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "100K+",
    label: "Active Users",
  },
  {
    value: "$5B+",
    label: "Transactions Analyzed",
  },
  {
    value: "99.99%",
    label: "Uptime Guarantee",
  },
  {
    value: "4.8/5",
    label: "User Satisfaction",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-slate-500" />,
    title: "Intelligent Analytics",
    description:
      "Harness AI for in-depth spending analysis and predictive forecasting",
  },
  {
    icon: <Receipt className="h-8 w-8 text-slate-500" />,
    title: "AI Receipt Processing",
    description:
      "Automatically scan and categorize receipts with cutting-edge AI",
  },
  {
    icon: <PieChart className="h-8 w-8 text-slate-500" />,
    title: "Smart Budgeting",
    description:
      "AI-driven budget creation with automated alerts and optimizations",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-slate-500" />,
    title: "Account Management",
    description: "Seamlessly handle multiple accounts with secure integration",
  },
  {
    icon: <Globe className="h-8 w-8 text-slate-500" />,
    title: "Global Currency Support",
    description:
      "Real-time conversion and multi-currency tracking for international users",
  },
  {
    icon: <Zap className="h-8 w-8 text-slate-500" />,
    title: "Recurring Automation",
    description: "AI-powered handling of recurring transactions and reports",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <Zap className="h-8 w-8 text-slate-500" />,
    title: "1. Sign Up Easily",
    description:
      "Create your account and connect your financial sources securely",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-slate-500" />,
    title: "2. Monitor Expenses",
    description:
      "Track and categorize your transactions automatically in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-slate-500" />,
    title: "3. Gain AI Insights",
    description:
      "Receive personalized recommendations to optimize your financial health",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Alex Thompson",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "AIVault revolutionized my financial tracking. The AI insights helped me cut unnecessary expenses and grow my business savings.",
  },
  {
    name: "Lisa Martinez",
    role: "Freelance Designer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "The receipt scanner is a game-changer. It saves me so much time, and the budget alerts keep me on track every month.",
  },
  {
    name: "David Kim",
    role: "Investment Banker",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    quote:
      "Perfect for multi-currency needs. AIVault's analytics provide professional-level insights right at my fingertips.",
  },
];
