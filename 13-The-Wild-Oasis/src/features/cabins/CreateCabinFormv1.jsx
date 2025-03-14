import { createCabin } from '../../services/apiCabins';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import FormRow from '../../ui/FormRow';





function CreateCabinForm({cabinToEdit={}}) {
  const {id:editId,...editValues} = cabinToEdit;
  const isEditSession = Boolean(editId);
  const queryClient = useQueryClient();
  const {register,handleSubmit,reset,getValues,formState} = useForm({defaultValues:isEditSession?editValues:{}});
  const {mutate,isPending:isCreating} = useMutation({
    mutationFn:createCabin,
    onSuccess:()=>{
      toast.success("New Cabin successfully created");
      queryClient.invalidateQueries({queryKey:["cabins"]});
      reset();
    },
    onError:(err)=>toast.error(err.message),
  
  });

  const {errors} = formState;

  function onSubmit(data){
    mutate({...data,image:data.image[0]});
  }

  function onError(err){
    // console.log(err);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit,onError)}>
      <FormRow label='Cabin name' error={errors?.name?.message}>
      <Input type="text" id="name" disabled={isCreating} {...register("name",{required:"this field is required"})}/>
      </FormRow>

      <FormRow label='Maximum Capacity'disabled={isCreating} error={errors?.maxCapacity?.message}>
      <Input type="number" disabled={isCreating} id="maxCapacity" {...register("maxCapacity",{required:"this field is required",
        min:{
          value:1,
          message:'capacity should be atleast one',
        }
        })}/>
      </FormRow>

      <FormRow label='Regular Price' error={errors?.regularPrice?.message}>
      <Input type="number" disabled={isCreating} id="regularPrice" {...register("regularPrice",{required:"this field is required"})}/>
      </FormRow>

      <FormRow label='Discount' error={errors?.discount?.message}>
      <Input type="number" id="discount" disabled={isCreating} {...register("discount",{required:"this field is required",
          validate:(value)=>Number(value) <= Number(getValues().regularPrice) || "Discount should be less than regular price"
        })} defaultValue={0} />
      </FormRow>
      
      <FormRow label='Description for website' error={errors?.description?.message}>
      <Textarea disabled={isCreating} type="number" id="description" defaultValue="" {...register("description",{required:"this field is required"})}/>z
      </FormRow>
      

      <FormRow label='Cabin Photo' error={errors?.image?.message}>
      <FileInput id="image" accept="image/*" {...register("image",{required:"this field is required"})}/>
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
