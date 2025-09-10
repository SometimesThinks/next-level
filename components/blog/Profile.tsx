import { Mail, Github, Linkedin } from 'lucide-react';

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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </CardContent>
      <CardFooter className="gap-2">
        {/* todo: 아이콘 클릭시 링크로 이동 */}
        {/* todo: 아이콘 변경 */}
        <Mail />
        <Github />
        <Linkedin />
      </CardFooter>
    </Card>
  );
};

export default Profile;
