import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type ProjectProps = {
    title: string;
    img: string;
    description: string;
    technologies: string[];
    gitHub: string;
    demo: string;
}
export function ProjectCard({ title, img, description, technologies, gitHub, demo }: ProjectProps) {
    return (
        <Card className="w-full">
            <CardContent className="p-0">
                <div className="relative h-64 rounded-t-md overflow-hidden">
                    <div className="flex items-center justify-center h-full text-muted-foreground text-xs">
                        {img ? <img src={img} alt={title} className="object-cover h-full w-full " /> : "No Image"}
                    </div>
                </div>
                <CardTitle className="text-sm mb-1 pl-2">{title}</CardTitle>
                <CardDescription className="text-xs mb-2  pl-2">
                   <p>{description}</p> 
                   <span>{technologies.join(", ")}</span>
                </CardDescription>
                <div className="flex gap-2 mt-4 pl-2">
                    {gitHub && <Button asChild><a href={gitHub}>GitHub</a></Button>}
                    {demo && <Button variant="outline" asChild><a href={demo}>Demo</a></Button>}
                </div>
            </CardContent>
        </Card>
    )
}