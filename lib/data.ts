import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const getAmenities = async () => {
  const session = await auth();
  if (!session || !session.user) throw new Error("Unauthorized Access");
  try {
    const result = await prisma.amenities.findMany();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getRooms = async () => {
  try {
    const result = await prisma.room.findMany({
      orderBy: { createdAt: "desc" },
      include: { category: true }, // 👉 tambahkan relasi kategori
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getRoomsById = async (roomId: string) => {
  try {
    const result = await prisma.room.findUnique({
      where: { id: roomId },
      include: {
        RoomAmenities: { select: { amenitiesId: true } },
        category: true, // 👉 ikut sertakan kategori
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

// (opsional) fungsi baru kalau mau fetch semua kategori
export const getCategories = async () => {
  try {
    const result = await prisma.category.findMany({
      orderBy: { name: "asc" },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getRoomDetailById = async (roomId: string) => {
  try {
    const result = await prisma.room.findUnique({
      where: { id: roomId },
      include: {
        RoomAmenities: {
          include: {
            Amenities: {
              select: {
                name: true,
              },
            },
          },
        },
        category: true, // 👉 ikut sertakan kategori
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getReservationById = async (id: string) => {
  try {
    const result = await prisma.reservation.findUnique({
      where: { id },
      include: {
        Room: {
          select: {
            name: true,
            image: true,
            price: true,
          },
        },
        User: {
          select: {
            name: true,
            email: true,
            phone: true,
          },
        },
        Payment: true,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getDisabledRoomById = async (roomId: string) => {
  try {
    const result = await prisma.reservation.findMany({
      select: {
        startDate: true,
        endDate: true,
      },
      where: {
        roomId: roomId,
        Payment: {
          some: {
            status: { not: "failure" },
          },
        },
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getReservationByUserId = async () => {
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    throw new Error("Unauthorized Access");
  }
  try {
    const result = await prisma.reservation.findMany({
      where: { userId: session.user.id },
      include: {
        Room: {
          select: {
            name: true,
            image: true,
            price: true,
          },
        },
        User: {
          select: {
            name: true,
            email: true,
            phone: true,
          },
        },
        Payment: true,
      },
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

// types untuk dashboard admin
export const getRevenueAndReserve = async () => {
  try {
    const result = await prisma.reservation.aggregate({
      _count: true,
      _sum: { price: true },

      where: {
        Payment: {
          some: {
            status: { not: "failure" },
          },
        },
      },
    });
    return {
      revenue: result._sum.price || 0,
      reserve: result._count,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getTotalCustomers = async () => {
  try {
    const result = await prisma.reservation.findMany({
      distinct: ["userId"],

      where: {
        Payment: {
          some: {
            status: { not: "failure" },
          },
        },
      },
      select: { userId: true },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getReservations = async () => {
  const session = await auth();
  if (
    !session ||
    !session.user ||
    !session.user.id ||
    session.user.role !== "admin"
  ) {
    throw new Error("Unauthorized Access");
  }
  try {
    const result = await prisma.reservation.findMany({
      include: {
        Room: {
          select: {
            name: true,
            image: true,
            price: true,
          },
        },
        User: {
          select: {
            name: true,
            email: true,
            phone: true,
          },
        },
        Payment: true,
      },
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
// end types for dashboard admin
