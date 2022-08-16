const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  let nomeMuher = order.order.delivery.deliveryPerson;
  let nomeHomem = order.name;
  let numeroTelefone = order.phoneNumber;
  let enderecoRua = order.address.street; 
  let enderecoNumero = order.address.number;
  let enderecoApt = order.address.apartment;
  let drink = order.order.drinks.coke.type;
  let pizza = order.order.pizza.marguerita
  let precoTotal = order.payment.total;
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    
    return `Olá ${nomeMuher}, entrega para: ${nomeHomem}, Telefone: ${numeroTelefone}, R. ${enderecoRua}, Nº: ${enderecoNumero}, AP: ${enderecoApt}`;
  }
  
  //console.log(customerInfo(order)) ;
  
  const nome = {name : 'Luiz Silva'};
   const preco = {payment: {total: 50}}
   const order2 = Object.assign(order, nome, preco);
   

   
   let nomeHomem1 = order2.name;
   let numeroTelefone1 = order2.phoneNumber;
   let enderecoRua1 = order2.address.street; 
   let enderecoNumero1 = order.address.number;
   let enderecoApt1 = order2.address.apartment;
   let drink1 = order2.order.drinks.coke.type;
   let pizza1 = order2.order.pizza.marguerita
   let precoTotal1 = order2.payment.total;
  const orderModifier = (order2) => {
    // Adicione abaixo as informações necessárias.
   return `Olá ${nomeHomem1}, o total do seu pedido de marguerita, pepperoni é R$ ${precoTotal1}`; 
  }
  
  console.log(orderModifier(order2)); 