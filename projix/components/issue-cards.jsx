import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import UserAvatar from "./user-avatar";

const priorityColor = {
  LOW: "border-green-600",
  MEDIUM: "border-yellow-300",
  HIGH: "border-orange-400",
  URGENT: "border-red-400",
};

const IssueCard = ({
  issue,
  showStatus = false,
  onDelete = () => {},
  onUpdate = () => {},
}) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{issue.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {showStatus && <Badge>{issue.status}</Badge>}
          <Badge variant="outline" className="-ml-1">
            {issue.priority}
          </Badge>
        </CardContent>
        <CardFooter>
          <UserAvatar user={user.assignee} />
        </CardFooter>
      </Card>
    </>
  );
};

export default IssueCard;
