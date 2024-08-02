import Link from "next/link";
import { TerminalIcon } from "../components/TerminalIcon";
import { SkillChip } from "@/components/SkillChip";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <TerminalIcon className="h-6 w-6" />
          <span className="sr-only">Antonio Sampaio - Engenheiro DevOps</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 print:hidden">
          <Link
            href="#skills"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Habilidades
          </Link>
          <Link
            href="#experience"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Experiência
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Projetos
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contato
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Desbloqueie o potencial do seu negócio
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Profissional dedicado a otimizar infraestruturas,
                    automatizar workflows, e garantir a integração e entrega
                    contínua dos seus projetos. Transformando ideias em
                    realidade.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    <b>Antonio Sampaio</b> - Engenheiro DevOps
                  </p>
                </div>
              </div>

              <img
                src="/server.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl sm:w-full lg:order-last lg:aspect-square print:hidden"
              />
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Habilidades
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Experiência do Dev ao Ops
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Proficiente em desenvolvimento de software, automação de
                  infraestrutura, gerenciamento de cloud, pipelines de CI/CD e
                  monitoramento/observabilidade.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-2">
                  <SkillChip name="TypeScript" />
                  <SkillChip name="Deno" />
                  <SkillChip name="NodeJS" />
                  <SkillChip name="Linux" />
                  <SkillChip name="Networking" />
                  <SkillChip name="Docker" />
                  <SkillChip name="Kubernetes" />
                  <SkillChip name="GitOps" />
                  <SkillChip name="AWS" />
                  <SkillChip name="Elastic Stack" />
                  <SkillChip name="CI/CD" />
                  <SkillChip name="Terraform" />
                  <SkillChip name="ArgoCD" />
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Infraestrutura como Código
                      </h3>
                      <p className="text-muted-foreground">
                        Proficiente em ferramentas como Terraform, AWS CDK, e
                        Kubernetes para automatizar o provisionamento e
                        gerenciamento de infraestrutura. Com um background de
                        desenvolvedor, garanto a qualidade e eficiência dos
                        códigos.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Integração e Entrega Contínua
                      </h3>
                      <p className="text-muted-foreground">
                        Experiente na construção e otimização de pipelines de
                        CI/CD utilizando GitLab CI, GitHub Actions e Argo
                        Workflows.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Monitoramento e Observabilidade
                      </h3>
                      <p className="text-muted-foreground">
                        Habilidoso na implementação de soluções de monitoramento
                        e observabilidade utilizando ferramentas como a stack
                        Elastic, Prometheus e Grafana.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/resume.svg"
                width="550"
                height="310"
                alt="Skills"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-center sm:w-full lg:order-last print:hidden"
              />
            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Experiência
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Desafios Vividos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mais de 5 anos de experiência como <i>dev</i> e atualmente me
                  dedicando ao <i>ops</i>.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/developer.svg"
                width="550"
                height="310"
                alt="Experience"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-center sm:w-full lg:order-last print:hidden"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Dev & Ops Engineer</h3>
                      <p className="text-muted-foreground">
                        Eureka Software | 2021 - Presente
                      </p>
                      <p className="text-muted-foreground">
                        Desenvolvi sistemas web do back ao front e nos últimos
                        anos me dediquei a otimização das operações do ciclo de
                        vida do software e ao gerenciamento de infraestrutura na
                        nuvem. Realizei a implementação de pipelines de CI/CD
                        assim como o gerenciamento de clusters kubernetes e
                        aplicações na nuvem AWS considerando observabilidade,
                        baixos custos e rapidez nos processos desde o início.
                        Influenciei o uso de ferramentas de analytics para
                        monitoramento de processos internos e tomadas de decisão
                        da empresa, gerando insights com base em dados obtidos a
                        partir das ferramentas já utilizadas.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Desenvolvedor Full Stack
                      </h3>
                      <p className="text-muted-foreground">
                        Aquabit | 2019 - 2021
                      </p>
                      <p className="text-muted-foreground">
                        Responsável por reescrever, desenhar e desenvolver uma
                        plataforma de gerenciamento de culturas de peixes e
                        camarões, desde o Figma até o navegador e celular.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">E muita bagagem...</h3>
                      <p className="text-muted-foreground">
                        Vivendo e aprendendo
                      </p>
                      <p className="text-muted-foreground">
                        Antes da vida profissional aprendi muito sobre os
                        fundamentos daquilo que hoje faço não mais por hobby. Do
                        JavaScript ao Linux fui desbravando assuntos e
                        realizando projetos mirabolantes até que um dia deixou
                        de ser só por diversão e passou a ser um dos pilares da
                        minha vida.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Projetos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Destaques da Carreira
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  O que andei fazendo para me destacar dos demais.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Redução de Custos na Nuvem
                      </h3>
                      <p className="text-muted-foreground">
                        Realizei a análise de infraestrutura na nuvem AWS a fim
                        de reduzir os custos e manter o padrão de qualidade e
                        segurança. Poucos milhares de reais foram economizados
                        por mês.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Gerenciamento de Clusters
                      </h3>
                      <p className="text-muted-foreground">
                        Participei ativamente da construção e manutenção de
                        clusters Kubernetes assim como influenciei na definição
                        de padrões a serem seguidos.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Alavancando Times</h3>
                      <p className="text-muted-foreground">
                        Dei início a um projeto de padronizar ferramentas de
                        desenvolvimento para times a fim de alavancar a
                        produtividade e qualidade dos softwares produzidos pela
                        empresa. Desde bibliotecas JavaScript a projetos
                        inteiros servindo como base para novas ideias dos
                        clientes.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/projects.svg"
                width="550"
                height="310"
                alt="Projects"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-center sm:w-full lg:order-last print:hidden"
              />
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Contato
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Vamos Trabalhar Juntos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estou aberto a conhecer novos projetos e ideias, seria um
                  prazer agregar e ajudar a fazer sua ideia acontecer.
                </p>
              </div>

              <p className="">+55 86 98121-2132</p>

              <div className="flex gap-2 min-[400px]:flex-row">
                <Link
                  href="https://www.linkedin.com/in/sampaio-leal"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  LinkedIn
                </Link>
                <Link
                  href="mailto:sampaioleal14@gmail.com"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  E-Mail
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
