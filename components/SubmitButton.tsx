"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

// form 안에서 쓰는 제출 버튼입니다.
// useFormStatus로 Server Action이 처리되는 동안 버튼을 비활성화합니다.
export function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "등록 중..." : label}
    </Button>
  );
}
