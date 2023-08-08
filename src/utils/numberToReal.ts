export const numberToReal = (value: number | string | undefined) => {
    if (!value) return;

    const numberEdited = Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })

    return numberEdited;
  };
