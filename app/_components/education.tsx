import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { education } from "@/data"

export default function Education() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-medium mb-2 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-primary" />
          Education
        </h2>
        <p className="text-muted-foreground text-sm">My academic background and qualifications</p>
      </div>

      <div className="space-y-6">
        {education.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between flex-col sm:flex-row items-start gap-1">
                <div>
                  <CardTitle className="text-lg font-medium">{item.degree}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">{item.school}</CardDescription>
                </div>
                <div className="sm:text-right text-sm text-muted-foreground">
                  <div>{item.period}</div>
                  <div>{item.location}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

