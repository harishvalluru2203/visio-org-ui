
export const AppLayout = (props: { children: any }) => {
  return (
    <div className="min-h-full">
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {props.children}
        </div>
      </main>
    </div>
  );
};
