import './OrderForm.scss';
import React, {useEffect, useState} from 'react';
import  {FormError}  from './FormError';

    function OrderForm(props) { //получаем инфу из заказа для отправки
    const[value, setValue] = useState({
        Имя: '',
        Email: '',
        Телефон: '',
        Адрес: '',
        Сообщение: '',
        Доставка: 'Самовывоз',
        fieldErrors: {Имя : '', 
                    Email: '',
                    Телефон: ''
                 },
        emailValid: false,
        nameValid: false,
        phoneValid: false,
        formValid: false,
        productArr: false
    });

    const [valid, setValid] = useState([]);
    const [arr, setArro] = useState(false);

    let productArr = [];

        Object.keys(props.cart).map(item => {
            const newObj = {
                cost: props.goodsObj[props.cart[item][0]]['cost'],
                name: props.goodsObj[props.cart[item][0]]['title'],
                articul: props.goodsObj[props.cart[item][0]]['articul'],
                count: props.cart[item].count
            }
            productArr.push(newObj)
            return newObj;
            // setArro(productArr.length);
        })

        function DisabledInput(){
            if(productArr.length > 0){
                setArro(true)
            }else{
                setArro(false)
            }
        }

    function ValidateField(field, val){
        let validfieldErrors = value.fieldErrors;
        let emailValid = value.emailValid;
        let nameValid = value.nameValid;
        let phoneValid = value.phoneValid;

        switch(field) {
            case 'Email':
            emailValid = val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            validfieldErrors.Email = emailValid ? '' : ' не корректно введен';

            break;
            case 'Имя':
            nameValid = val.length >= 2;
            validfieldErrors.Имя = nameValid ? '' : 'слишком короткое';
            break;

            case 'Телефон':
            phoneValid = val.match(/^\+38[-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/);
            validfieldErrors.Телефон = phoneValid ? '': 'не корректно введен';
            break;
            default:
            break;
        }

        setValue(prev => {
            return{
                ...prev,
                fieldErrors: validfieldErrors,
                emailValid: emailValid,
                nameValid: nameValid,
                phoneValid: phoneValid,
                // productArr: productArr.length > 0,
                formValid: phoneValid && nameValid && emailValid
            }
        })

    }

    function handleChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setValue(prev => {

        return{
        ...prev,
        [name]:value
        }

    });
        setValid([name,value])
    }

    useEffect(() => {
        ValidateField(valid[0],valid[1]);
    },[valid]);// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        DisabledInput();
    });
 
   function errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    let LoadDataFromForm = (event) => {//сдесь проходит валидация перед отправкой и получение данных из формы
        event.preventDefault();
        let self = event.target;
        let formData = new FormData(self);
        // let name = self.name.value;
        // let tel = self.phone.value;
        // let email = self.email.value;
        // let delivery = self.radio.value;
        // let address = self.address.value;
        // let message = self.message.value;
        formData.append('Товары', JSON.stringify(productArr));
        console.log(self)
        // formData.append('Имя',value.Name);
        // formData.append('Телефон',value.Phone);
        // formData.append('Доставка',value.Delivery);
        // formData.append('Email',value.Message);
        // formData.append('Адрес',value.Address);
        // formData.append('Сообщение',value.Delivery);

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Отправлено');
                }
            }
        }

        xhr.open('POST','http://backend/mail.php', true);
        xhr.send(formData);
        self.reset();
      }

      function HendlerRelaud(){
        window.location.reload();
        alert('ЗАКАЗ ОТПРАВЛЕН, ОЖИДАЙТЕ ЗВОНКА ОТ НАШЕГО МЕНЕДЖЕРА');
      }
    return (
        <form action="" className='order-form' onSubmit={LoadDataFromForm}>
            <input type="hidden" name="Тема" value="Обратный звонок"/>
            <input type="hidden" name="admin_email[]" value="lidama65@mail.ua"/>
            <input type="hidden" name="form_subject" value="Заявка с сайта Сайт"/>
            <div className="panel panel-default">
                <FormError formErrors={value.fieldErrors} />
            </div>
            <div className='form-group'>
                <label className='label-control' htmlFor="name">Ваше имя *</label>
                <div className="elements-wr">
                    <input type="text"
                             name='Имя'
                             value={value.Имя}
                             onChange={handleChange} 
                             placeholder='Ваше имя'
                             disabled={!arr}
                             className={`form-control ${errorClass(value.fieldErrors.Имя)}`}/>
                </div>
            </div>

            <div className='form-group'>
                <label className='label-control' htmlFor="email">Email *</label>
                <div className="elements-wr">
                    <input type="email"
                          name='Email' 
                          value={value.Email}
                          onChange={handleChange} 
                          placeholder='Email'
                          disabled={!arr}
                          className={`form-control  ${errorClass(value.fieldErrors.Email)}`}/>                    
                </div>
            </div>

            <div className='form-group'>
                <label className='label-control' htmlFor="phone">Телефон *</label>
                <div className="elements-wr">
                    <input type='tel' 
                        name='Телефон'
                        value={value.Телефон}
                        className={`form-control ${errorClass(value.fieldErrors.Телефон)}`}
                        placeholder='+389999999999'
                        disabled={!arr}
                        onChange={handleChange} />                 
                </div>
            </div>

            <div className='form-group'>
                <label className='label-control'>Способ доставки *</label>
                <div className="elements-wr">
                    <div className='radio-block'> 
                        <input type="radio"
                         name='Доставка'
                         value='Самовывоз'
                         checked={value.Доставка === 'Самовывоз'} 
                         onChange={handleChange}
                         className='radio-el'
                         disabled={!arr}
                          id='radio'/>
                        <label htmlFor="radio">Самовывоз (бесплатно)</label>                   
                    </div>

                    <div className='radio-block'> 
                        <input type="radio"
                                name='Доставка'
                                 value='Новой почтой'
                                 checked={value.Доставка === 'Новой почтой'} 
                                 onChange={handleChange}
                                 disabled={!arr}
                                  className='radio-el'/>
                        <label htmlFor="delivery">Доставка "Новой почтой"</label>                   
                    </div>
                </div>
            </div>

            <div className='form-group'>
                <label className='label-control'>Адрес доставки</label>
                <div className="elements-wr">
                    <textarea 
                            name='Адрес' 
                            onChange={handleChange}
                            placeholder='Ваш город, номер отделения "Новой почты"'
                            disabled={!arr} 
                            className='form-control'/>                    
                </div>
            </div>
            <div className='form-group'>
                <label className='label-control'>Cообщение</label>
                <div className="elements-wr">
                    <textarea
                            name='Сообщение'
                            placeholder='сообщение'
                            disabled={!arr}
                            className='form-control'/>    
                </div>
            </div>
            <button onClick={HendlerRelaud} className="btn-reset btn-primery order-btn" disabled={!value.formValid}>ОТПРАВИТЬ ЗАКАЗ</button>
        </form>
    );
}


export default OrderForm;