export interface Team {
  id: string;
  name: string;
  members: TeamMember[];
}

export interface TeamMember {
  id: string;
  username: string;
  role: "ADMIN" | "MEMBER";
}