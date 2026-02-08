import TodoDetailContainer from '@/components/todo/containers/TodoDetailContainer';
import React from 'react';

const Page = async ({ params }: { params: Promise<{ itemId: string }> }) => {
  const { itemId } = await params;
  return <TodoDetailContainer id={Number(itemId)} />;
};

export default Page;
