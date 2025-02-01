function required(value: string | number) {
    return value ? true : "Campo é obrigatório";
}

export default required;
