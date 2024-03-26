import React from 'react';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#151518] w-full pb-[80px]">
      <section className="mx-auto px-5 max-w-3xl pt-[30px] pb-[32px]">{children}</section>
    </div>
  );
}

export default Layout;
