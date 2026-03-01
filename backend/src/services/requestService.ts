import prisma from "../db/index.js";

export interface CreateRequestDTO {
  name: string;
  email?: string | undefined;
  phone?: string | undefined;
  contactMethod: "EMAIL" | "PHONE" | "WHATSAPP";
  message?: string | undefined;
  serviceId: number;
}

export async function createRequest(data: CreateRequestDTO) {
  const created = await prisma.request.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      contactMethod: data.contactMethod,
      message: data.message,
      service: { connect: { id: data.serviceId } },
    },
  });
  return created;
}
