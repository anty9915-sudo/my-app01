export type Notice = {
    id: string
    title: string
    author: string
    content: string
    createdAt: string
}

const Notices: Notice[] = [
    {
        id: "1",
        title: "웹서버보안프로그래밍 개강 안내",
        author: "안태규",
        content: "강의계획서를 확인하고 열심히 공부해 봅시다.",
        createdAt: "2026-09-01",
    },
     {
        id: "2",
        title: "Github organization 초대 안내",
        author: "안태규",
        content: "이메일을 확인하고 가입해주세요.",
        createdAt: "2026-09-03",
    },
     {
        id: "3",
        title: "첫 번째 과제 안내",
        author: "안태규",
        content: "구현된 내용의 github, vercel 링크를 제출합니다.",
        createdAt: "2026-09-21",
    },
]

let nextId = 4;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getNotices(): Promise<Notice[]> {
  await delay(600); // 실제 DB 조회를 흉내내는 지연 — loading.tsx가 보이는 이유
  // 최신 글이 위로 오도록 정렬 (실제 DB에서도 흔히 하는 정렬)
  return [...Notices].sort((a, b) => (a.id < b.id ? 1 : -1));
}

export async function getNotice(id: string): Promise<Notice | undefined> {
  await delay(400);
  return Notices.find((n) => n.id === id);
}

export async function createNotice(input: {
  title: string;
  author: string;
  content: string;
}): Promise<Notice> {
  await delay(300);
  const notice: Notice = {
    id: String(nextId++),
    title: input.title,
    author: input.author,
    content: input.content,
    createdAt: new Date().toISOString().slice(0, 10),
  };
  Notices.push(notice);
  return notice;
}

