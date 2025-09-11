import { Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarImage } from '../ui/avatar';
import { Card, CardHeader, CardFooter, CardContent, CardTitle, CardDescription } from '../ui/card';

const Profile = () => {
  return (
    <Card className="gap-4 border-b bg-background text-foreground dark:bg-background dark:text-foreground">
      <CardHeader>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <CardTitle>Daeyeong Yun</CardTitle>
        <CardDescription>Frontend Developer</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">호기심 많은 프론트엔드 개발자입니다.</p>
      </CardContent>
      <CardFooter className="gap-4">
        <Link href="https://github.com/SometimesThinks">
          <Github />
        </Link>
        <Link href="https://www.linkedin.com/in/daeyeong-yun-aabb37323/">
          <Linkedin />
        </Link>
        <Link href="mailto:ycw2859@gmail.com">
          <Mail />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Profile;
