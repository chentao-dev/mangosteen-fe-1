export function time(date = new Date()) {
  const api = {
    /*格式化时间
     *把时间拆开, 套进模板, 返回模板
     */
    format: (template = "YYYY-MM-DD hh:mm:ss") => {
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      let h = date.getHours();
      let min = date.getMinutes();
      let s = date.getSeconds();

      return template
        .replace("YYYY", y.toString())
        .replace("MM", m.toString().padStart(2, "0"))
        .replace("DD", d.toString().padStart(2, "0"))
        .replace("hh", h.toString().padStart(2, "0"))
        .replace("mm", min.toString().padStart(2, "0"))
        .replace("ss", s.toString().padStart(2, "0"));
    },
  };
  return api;
}
