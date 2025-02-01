function required(value: string | number) {
    console.log(value);
    return value ? true : "Campo é obrigatório";
}

export default required;
