export const get_writing = async () => {
  const gl_ = import.meta.glob("/writing_/*.md");
  console.log(gl_);

  const gle_ = Object.entries(gl_);

  return await Promise.all(
    gle_.map(async ([pa, re]) => {
      const { metadata } = await re();

      const pas = pa.slice(0, -3);
      console.log(pas);

      return {
        me: metadata,
        pa: pas,
      };
    })
  );
};
