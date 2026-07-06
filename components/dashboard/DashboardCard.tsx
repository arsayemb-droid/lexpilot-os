import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type DashboardCardProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function DashboardCard({
  title,
  description,
  children,
}: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>

        {description && (
          <CardDescription>{description}</CardDescription>
        )}
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}