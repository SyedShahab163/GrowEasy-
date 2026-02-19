import { getServerSession } from "next-auth"

export default async function Dashboard() {
  const session = await getServerSession()
  if (!session) {
    return <div>Not authenticated</div>
  }

  return <div>Welcome {session.user?.name}</div>
}
