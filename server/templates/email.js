function emailTemplate(body) {
  return `
      <h3>Dziękujemy za przesłanie wiadomości</h3>
      <h4>Jest to wiadomość automatyczna prosimy na nią nie odpowiadać</h4>
      <h4>Odpowiemy na Państwa wiadomość tak szybko jak będzie to możliwe</h4>
      <div style="color: #424242">
      <div>Imię: ${body.name}</div> 
      <div>Nazwisko: ${body.surname}</div> 
      <div>Adres E-mail: ${body.email}</div>
      <div>Numer telefonu: ${body.phone}</div>
      <div>Treść wiadomości: ${body.message}</div></div>`;
}

module.exports = emailTemplate;
