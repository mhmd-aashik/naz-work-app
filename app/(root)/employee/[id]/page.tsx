export const revalidate = 0; // revalidate the data at most every hour

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return (
    <div>
      <h1>Employee {id}</h1>
    </div>
  );
};

export default Page;
