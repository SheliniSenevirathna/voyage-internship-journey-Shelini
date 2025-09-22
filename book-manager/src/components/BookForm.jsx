import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  author: yup.string().required('Author is required'),
  genre: yup.string().required('Genre is required'),
  publishedDate: yup.string().required('Published Date is required'),
})

export default function BookForm({ defaultValues = {}, onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 p-4 border rounded">
      {['title','author','genre','publishedDate'].map((field) => (
        <div key={field}>
          <label className="block">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input {...register(field)} className="border p-1 w-full rounded"/>
          {errors[field] && <p className="text-red-500 text-sm">{errors[field].message}</p>}
        </div>
      ))}
      <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">Submit</button>
    </form>
  )
}
