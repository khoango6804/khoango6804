"use client"

import Link from "next/link"
import { ArrowRight, Code, ExternalLink, Github, Linkedin, Mail, User, Award, Phone, Facebook } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export default function Portfolio() {
  const { scrollToSection } = useSmoothScroll()

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <User className="h-5 w-5" />
              <span>Ngô Quốc Anh Khoa</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <a
                href="#about"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={(e) => scrollToSection(e, "about")}
              >
                About
              </a>
              <a
                href="#experience"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={(e) => scrollToSection(e, "experience")}
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={(e) => scrollToSection(e, "projects")}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={(e) => scrollToSection(e, "skills")}
              >
                Skills
              </a>
              <a
                href="#certifications"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={(e) => scrollToSection(e, "certifications")}
              >
                Certifications
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={(e) => scrollToSection(e, "contact")}
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link href="https://github.com/khoango6804" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/qu%E1%BB%91c-anh-khoa-ng%C3%B4-548925308/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://www.facebook.com/khoa.ngo.25590/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
                <Button>Contact Me</Button>
              </a>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <section className="w-full py-24 md:py-32 lg:py-40 border-b">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Hi, I'm Ngô Quốc Anh Khoa
                    </h1>
                    <p className="text-xl text-muted-foreground">AI Engineer/AI Analyst</p>
                    <p className="text-lg text-muted-foreground mt-4">
                      Passionate about Machine Learning and Deep Learning, seeking opportunities to apply AI in mental
                      health & daily life.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                    <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
                      <Button className="w-full min-[400px]:w-auto">
                        View My Work
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
                      <Button variant="outline" className="w-full min-[400px]:w-auto">
                        Get in Touch
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Avatar src="/images/profile-photo.jpeg" alt="Ngô Quốc Anh Khoa" size="xl" />
                </div>
              </div>
            </div>
          </section>
          <section id="about" className="w-full py-12 md:py-24 lg:py-32 border-b">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get to know me</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Final-year student at FPT University, passionate about Machine Learning, Deep Learning, Computer
                    Vision, and Natural Language Processing. Actively seeking internships with full-time potential in
                    AI-driven roles. Strong proficiency in Python, TensorFlow, PyTorch, and OpenCV. Philosophy: "Success
                    is the sum of small efforts, repeated day in and day out."
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Education</h3>
                        <p className="text-muted-foreground">
                          Bachelor's Degree in Computer Science from FPT University (Final Year)
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Achievements</h3>
                        <p className="text-muted-foreground">Top 3 in ResFes Competition at FPTUniversity</p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Interests</h3>
                        <p className="text-muted-foreground">
                          Applied AI for mental health & daily life, sports – sweat clears the mind
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <div className="relative overflow-hidden rounded-lg shadow-lg max-w-md">
                    <img
                      src="/images/award-ceremony.jpeg"
                      alt="Ngô Quốc Anh Khoa nhận giải ba tại cuộc thi SINH AI ĐINH"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm">
                        Giải 3 tại cuộc thi ĐỈNH AI AI ĐỈNH - Spring 2025 với giải thưởng 4.000.000 VND
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="experience" className="w-full py-12 md:py-24 lg:py-32 border-b">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Experience</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Journey</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    My professional experience in the field of AI and Machine Learning.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-5xl py-12">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>AI Engineer Intern</CardTitle>
                      <Badge>September 2024 – December 2024</Badge>
                    </div>
                    <CardDescription>CEH Company</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Worked as an AI Engineer Intern, gaining hands-on experience with machine learning models and AI
                      applications. Contributed to projects involving deep learning and computer vision.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section id="projects" className="w-full py-12 md:py-24 lg:py-32 border-b">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Projects</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Recent Work</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Here are some of the AI and machine learning projects I've worked on.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Tool for Room Decoration</CardTitle>
                    <CardDescription>Harnessing Diffusion Model for Interior Design</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt="Room Decoration AI"
                      className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                      height="225"
                      src="/images/room-decoration.png"
                      width="400"
                    />
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>Diffusion Models</Badge>
                      <Badge>Python</Badge>
                      <Badge>Computer Vision</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link href="https://github.com/khoango6804" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Handwriting Text Detection</CardTitle>
                    <CardDescription>Using Deep Learning to detect handwriting text</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt="Handwriting Detection"
                      className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                      height="225"
                      src="/images/handwriting-detection.png"
                      width="400"
                    />
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>Deep Learning</Badge>
                      <Badge>OCR</Badge>
                      <Badge>Computer Vision</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link href="https://github.com/khoango6804" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Glody Website</CardTitle>
                    <CardDescription>
                      Study abroad support website integrated with AI for personalized school matching
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt="Glody Website"
                      className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                      height="225"
                      src="/images/glody-website.png"
                      width="400"
                    />
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>JavaScript</Badge>
                      <Badge>Deep Learning</Badge>
                      <Badge>Python</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link href="https://github.com/khoango6804" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Stable Diffusion Model</CardTitle>
                    <CardDescription>Stable Diffusion Model for Generate Image</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt="Stable Diffusion"
                      className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                      height="225"
                      src="/images/face-filter.png"
                      width="400"
                    />
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>Stable Diffusion</Badge>
                      <Badge>Generative AI</Badge>
                      <Badge>Python</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link href="https://github.com/khoango6804" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Insect Detection</CardTitle>
                    <CardDescription>Insect Detection for Agricultural Pest Removal Using YOLO</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt="Insect Detection"
                      className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                      height="225"
                      src="/images/insect-detection.png"
                      width="400"
                    />
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>YOLO</Badge>
                      <Badge>Object Detection</Badge>
                      <Badge>Agriculture</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link href="https://github.com/khoango6804" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Hazard Label Detection</CardTitle>
                    <CardDescription>
                      Computer vision model to detect and classify hazardous material labels (e.g., flammable, toxic)
                      for safety automation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt="Hazard Label Detection"
                      className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                      height="225"
                      src="/images/hazard-detection.png"
                      width="400"
                    />
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>YOLO</Badge>
                      <Badge>Computer Vision</Badge>
                      <Badge>Python</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link href="https://github.com/khoango6804" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
          <section id="skills" className="w-full py-12 md:py-24 lg:py-32 border-b">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Skills</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Expertise</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I've worked with a variety of technologies and frameworks throughout my career.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Code className="h-8 w-8" />
                    <div>
                      <CardTitle>Programming Languages</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <Badge className="w-full justify-between">
                          <span>Python</span>
                          <span>Master</span>
                        </Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="w-full justify-between">
                          <span>SQL</span>
                          <span>Intermediate</span>
                        </Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="w-full justify-between">
                          <span>R</span>
                          <span>Intermediate</span>
                        </Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="w-full justify-between">
                          <span>C++</span>
                          <span>Intermediate</span>
                        </Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="w-full justify-between">
                          <span>JavaScript</span>
                          <span>Intermediate</span>
                        </Badge>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Code className="h-8 w-8" />
                    <div>
                      <CardTitle>AI & ML</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <Badge className="w-full justify-between">
                          <span>Machine Learning</span>
                          <span>Advanced</span>
                        </Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="w-full justify-between">
                          <span>Deep Learning</span>
                          <span>Advanced</span>
                        </Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="w-full justify-between">
                          <span>Computer Vision</span>
                          <span>Advanced</span>
                        </Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="w-full justify-between">
                          <span>NLP</span>
                          <span>Intermediate</span>
                        </Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="w-full justify-between">
                          <span>Generative AI</span>
                          <span>Intermediate</span>
                        </Badge>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Code className="h-8 w-8" />
                    <div>
                      <CardTitle>Tools & Software</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <Badge className="w-full justify-between">
                          <span>Microsoft Office</span>
                          <span>Advanced</span>
                        </Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="w-full justify-between">
                          <span>PowerBI</span>
                          <span>Intermediate</span>
                        </Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="w-full justify-between">
                          <span>Latex</span>
                          <span>Intermediate</span>
                        </Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="w-full justify-between">
                          <span>Git & GitHub</span>
                          <span>Advanced</span>
                        </Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="w-full justify-between">
                          <span>CUDA</span>
                          <span>Intermediate</span>
                        </Badge>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section id="certifications" className="w-full py-12 md:py-24 lg:py-32 border-b">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Certifications</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Certifications</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Continuous learning and professional development are important to me.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Award className="h-8 w-8" />
                    <div>
                      <CardTitle>IBM Full Stack Software Developer</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Comprehensive certification covering full stack development principles and practices.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="https://www.coursera.org/account/accomplishments/professional-cert/8TWWVQBAPGQY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Xem chứng chỉ
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Award className="h-8 w-8" />
                    <div>
                      <CardTitle>Software Development Lifecycle</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      In-depth understanding of software development methodologies and best practices.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="https://www.coursera.org/account/accomplishments/specialization/ZZ4UADLZR2RX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Xem chứng chỉ
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Award className="h-8 w-8" />
                    <div>
                      <CardTitle>Big Data</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Expertise in handling, processing, and analyzing large datasets.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="https://coursera.org/share/929334734d1f229ca4a941bfda128913"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Xem chứng chỉ
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Award className="h-8 w-8" />
                    <div>
                      <CardTitle>Project Management Principles and Practices</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Comprehensive certification covering Project Management principles and practices.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="https://coursera.org/share/0462bd0cbadbc8c9fd5b01c7e615cea4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Xem chứng chỉ
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Award className="h-8 w-8" />
                    <div>
                      <CardTitle>Accelerating End-to-End Data Science Workflows</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Advanced techniques for optimizing data science pipelines and workflows.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="https://learn.nvidia.com/certificates?id=V4dvEryaSwu5xeAhDgxivw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Xem chứng chỉ
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Award className="h-8 w-8" />
                    <div>
                      <CardTitle>Building Real-Time Video AI Application</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized training in developing AI applications for real-time video processing.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="https://learn.nvidia.com/certificates?id=YINMag4fTjiXI0eFCD7ukQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Xem chứng chỉ
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Award className="h-8 w-8" />
                    <div>
                      <CardTitle>Fundamentals of Accelerated Computing with CUDA Python</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Skills in leveraging GPU acceleration for Python-based machine learning applications.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="https://learn.nvidia.com/certificates?id=VQ9oIeIhRjes6MOhoETobg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Xem chứng chỉ
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Award className="h-8 w-8" />
                    <div>
                      <CardTitle>Getting Started with Deep Learning</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      A beginner-friendly project exploring the fundamentals of deep learning using neural networks on
                      image classification tasks.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="https://learn.nvidia.com/certificates?id=Zm1lkMqzSIOcWj-8I9TBjg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Xem chứng chỉ
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Award className="h-8 w-8" />
                    <div>
                      <CardTitle>Disaster Risk Monitoring Using Satellite Imagery</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Leveraged deep learning and satellite imagery to detect areas at risk of natural disasters such as
                      floods, wildfires, and landslides.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="https://learn.nvidia.com/certificates?id=96Xw6d3zRt-5KzFeGXsknQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Xem chứng chỉ
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
          <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <Mail className="h-5 w-5" />
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">anhkhoa.ngo0608@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Linkedin className="h-5 w-5" />
                      <div>
                        <p className="text-sm font-medium">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">linkedin.com/in/quốc-anh-khoa-ngô-548925308</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Github className="h-5 w-5" />
                      <div>
                        <p className="text-sm font-medium">GitHub</p>
                        <p className="text-sm text-muted-foreground">github.com/khoango6804</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="h-5 w-5" />
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">0703089685</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Facebook className="h-5 w-5" />
                      <div>
                        <p className="text-sm font-medium">Facebook</p>
                        <p className="text-sm text-muted-foreground">facebook.com/khoa.ngo.25590</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and I'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your message"
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <footer className="w-full border-t py-6 md:py-0">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-16 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ngô Quốc Anh Khoa. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="https://github.com/khoango6804" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/qu%E1%BB%91c-anh-khoa-ng%C3%B4-548925308/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://www.facebook.com/khoa.ngo.25590/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <Link href="mailto:anhkhoa.ngo0608@gmail.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
