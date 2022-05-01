import { useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useKmContext } from "../../contexts/KmContext";

const FormAdd = () => {
  const { addPemakaian } = useKmContext();
  const no_spj = useRef();
  const km_awal = useRef();
  const km_akhir = useRef();
  const km_pemakaian = useRef();
  const tgl_berangkat = useRef();
  const jam_berangkat = useRef();
  const tgl_kembali = useRef();
  const jam_kembali = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form1 = e.target;
    let data = {};
    for (let i = 0; i < form1.length; i++) {
      if (form1[i].id != "") data[form1[i].id] = form1[i].value;
    }
    console.log(data);
    addPemakaian(data);
  };

  const hitungPemakaian = () => {
    km_pemakaian.current.value = km_akhir.current.value - km_awal.current.value;
  };

  const defaultDateTime = () => {
    let jam = new Date().getHours() + ":" + new Date().getMinutes();
    jam_berangkat.current.value = jam;
    jam_kembali.current.value = jam;
    tgl_berangkat.current.valueAsDate = new Date();
    tgl_kembali.current.valueAsDate = new Date();
  };

  useEffect(() => {
    defaultDateTime();
  }, []);
  //
  return (
    <>
      <Form onSubmit={handleSubmitForm}>
        {[
          {
            id: "no_spj",
            label: "No SPJ",
            type: "text",
            reference: null,
            text: "Kosongi jika tidak ada SPJ",
          },
          {
            id: "tgl_berangkat",
            label: "Tanggal Berangkat",
            type: "date",
            reference: tgl_berangkat,
            text: "",
          },
          {
            id: "jam_berangkat",
            label: "Jam Berangkat",
            type: "time",
            reference: jam_berangkat,
            text: "",
          },
          {
            id: "tgl_kembali",
            label: "Tanggal Kembali",
            type: "date",
            reference: tgl_kembali,
            text: "",
          },
          {
            id: "jam_kembali",
            label: "Jam Kembali",
            type: "time",
            reference: jam_kembali,
            text: "",
          },
          {
            id: "tujuan",
            label: "Tujuan",
            type: "text",
            reference: null,
            text: "",
          },
          {
            id: "keperluan",
            label: "Keperluan",
            type: "text",
            reference: null,
            text: "",
          },
          {
            id: "km_awal",
            label: "KM Awal",
            type: "number",
            reference: km_awal,
            text: "",
            func: hitungPemakaian,
          },
          {
            id: "km_akhir",
            label: "KM Akhir",
            type: "number",
            reference: km_akhir,
            text: "",
            func: hitungPemakaian,
          },
          {
            id: "km_pemakaian",
            label: "KM Pemakaian",
            type: "number",
            reference: km_pemakaian,
            text: "",
            disabled: true,
          },
        ].map(({ id, label, type, reference, text, func, disabled }, i) => (
          <Form.Group className="mb-3" controlId={id} key={i}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
              type={type}
              placeholder="..."
              ref={reference}
              onChange={func ? func : null}
              disabled={disabled ? disabled : null}
            />
            <Form.Text className="text-muted">{text}</Form.Text>
          </Form.Group>
        ))}
        <div>
          <Button variant="warning" type="reset">
            Reset
          </Button>
          <Button variant="primary" type="submit">
            Simpan
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormAdd;
