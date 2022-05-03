const BULAN = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Ags",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

export const convertDate = (d) => {
  const dt = new Date(d);
  const tgl = dt.getDate();
  const bln = dt.getMonth();
  const thn = dt.getFullYear();
  return tgl + " " + BULAN[bln - 1] + " " + thn;
};
export const convertTime = (d) => {
  const dt = new Date(d);
  const jam = dt.getHours();
  const menit = dt.getMinutes();
  return jam + ":" + menit;
};
