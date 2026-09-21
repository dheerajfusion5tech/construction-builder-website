import { createFileRoute } from "@tanstack/react-router"
import { TeamPage } from "@/features/team/pages/TeamPage"
export const Route = createFileRoute("/team")({ component: TeamPage })
