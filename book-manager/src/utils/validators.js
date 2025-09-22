import * as yup from 'yup'


export const bookSchema = yup.object({
title: yup.string().required('Title is required').min(2, 'Too short'),
author: yup.string().required('Author is required'),
isbn: yup.string().nullable().matches(/^(?:\d{10}|\d{13})?$/, 'ISBN must be 10 or 13 digits').notRequired(),
publishedDate: yup.date().nullable().typeError('Invalid date'),
genre: yup.string().nullable(),
summary: yup.string().nullable(),
coverUrl: yup.string().url('Must be a valid URL').nullable(),
})