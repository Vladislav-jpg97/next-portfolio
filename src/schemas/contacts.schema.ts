import * as z from "zod"

export const contactsSchema = z.object({
    email: z.string().trim().nonempty("Заполните почту"),
    message: z.string().trim().nonempty("Добавьте текст").max(255,"Максимальное кол-во сиволов 255")
})
export type ContactsType = z.infer<typeof contactsSchema>