export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'This field is required',
            'invalidName':'Invalid Name',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Password must be at least 6 characters long, and contain a number',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'invalidDescription':'Invalid Description',
            'invalidPhoneNumber' : 'Invalid phone number',
            'invaliZip' : 'Invalid zip code',
            'invalidPin' : 'Invalid pin',
            'invalidIntegerNo' : 'Invalid Number',
            'casenotvalid' : 'Only small case allowed'
        };

        return config[validatorName];
    }

    static emailValidator(control:any) {
        // RFC 2822 compliant regex
       if(control.value.length!=0)
       {
            if (control.value.match(/^(([^<>()%*=$[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\)|(\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\]))|([^-./!#%+=*()@$, ])(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) 
            {
                return null;
            } 
            else 
            {
                return { 'invalidEmailAddress': true };
            }
       }
    }

    static dateValidator(control:any) {
        // RFC 2822 compliant regex
        if(control.value.length!=0)
        {
             if (control.value.match(/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/)) 
             {
                return null;
             } 
             else 
             {
                return { 'invalidEmailAddress': true };
             }
        }
       
    }

     static integerValidation(control:any) {
        // RFC 2822 compliant regex
        if(control.value.length!=0)
        {
             if (control.value.match(/^[0-9]*$/)) 
             {
                return null;
             } 
             else 
             {
                return { 'invalidIntegerNo': true };
             }
        }
       
    }



    static nameValidator(control:any) {
        // RFC 2822 compliant regex
        // if (control.value.match(/^[a-zA-Z 0-9']*$/)) {
      if(control.value.length!=0)
      {
            if (control.value.match(/^[a-zA-Z\s]+$/)) 
            {
                if(control.value.length>200){
                    return { 'invalidName': true  };
                }else{
                    return null;
                }
            } else {
                return { 'invalidName': true };
            }
      }
       
    }

      static caseSensitiveTextValidator(control:any) {
        // RFC 2822 compliant regex
        // if (control.value.match(/^[a-zA-Z 0-9']*$/)) {
      if(control.value.length!=0)
      {
            if (control.value.match(/^[a-z\s]+$/)) 
            {
                if(control.value.length>200){
                    return { 'casenotvalid': true  };
                }else{
                    return null;
                }
            } else {
                return { 'casenotvalid': true };
            }
      }
       
    }

    static descriptionValidator(control:any) {
        // RFC 2822 compliant regex
        if(control.value!=null)
        {
            if (control.value.match(/[<>{}]/)) {
                return { 'invalidDescription': true };
            } else {
                if(control.value.length>2000){
                    return { 'invalidDescription': true };
                }else{
                    return null;
                }

            }
        }
    }

     static numberValidator(control:any) {
        // RFC 2822 compliant regex
        if(control.value.length != 0)
        {
            if (control.value.match(/^\d+$/)){
                    return null;
            } else {
                return { 'Please enter number': true };
            }
        }
    }


    static pinValidator(control:any) {
        // RFC 2822 compliant regex
        if(control.value.length != 0)
        {
            if (control.value.match(/^[0-9]*$/)){
                if(control.value.length == 4){
                    return null;
                }else if(control.value.length == 5){
                    return null;
                }else{
                    return { 'invalidPin': true };
                }
            } else {
                return { 'invalidPin': true };
            }
        }
    }

    static lengthValidator(control:any) {
        // RFC 2822 compliant regex
        if (control.value.length>2) {
            return null;
        } else {
            return { 'invalidName': true };
        }
    }

    static passwordValidator(control:any) {

        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*?()]{6,100}$/)) {

            return null;

        } else {
            return { 'invalidPassword': true };
        }
    }

    static imageFileValidator(event:any){
        let fileTypes:any[]=['jpg','jpeg','png'];
        if (event.target.files && event.target.files[0]) {
            let extension = event.target.files[0].name.split('.').pop().toLowerCase();
            if( (fileTypes.indexOf(extension) > -1 ) && (event.target.files[0].size < 100000)){
             return { 'invalidFile':false,'message':''};
            }
            else{
                 return { 'invalidFile':true ,'message':'File Type should be jpg, jpeg, png and less than 100 KB'};
            }
        }
    }

     static phoneValidator(control:any) 
     {
         if(control.value.length!=0)
         {
            if (control.value.match(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{3,4})(?: *x(\d+))?\s*$/)) 
            // if (control.value.match(/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/)) 
            {
                return null;

            } 
            else 
            {
                return { 'invalidPhoneNumber': true };
            }
         }
       
    }

    //  static zipCodeValidator(control:any) {
    //     // RFC 2822 compliant regex
    //     // if (control.value.match(/^[a-zA-Z 0-9']*$/)) {
    //     if (control.value.match(/(?i)^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/)) {
    //         if(control.value.length>200){
    //             return { 'invaliZip': true  };
    //         }else{
    //             return null;
    //         }
    //     } else {
    //         return { 'invaliZip': true };
    //     }
    // }

}
