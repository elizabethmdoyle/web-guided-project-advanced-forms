// Here goes the schema for the form
import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    username: Yup
        .string('Username is required')
        .required('Please enter a name')
    email: Yup
        .string('Must be a valid email address')
        .required('Must be a valid email address')
       
        role: Yup
        .dropdown('A role must be selected')
        .required('Must be a valid email address')
        civil: Yup
        .checkbox('A civil option must be selected')
        .required('Must select an option')
        




})