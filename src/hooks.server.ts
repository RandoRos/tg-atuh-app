import { db } from '$lib/prisma'

export const handle = async ({ resolve, event }) => {
	const session = event.cookies.get('session')
	if (session) {
		const user = await db.user.findUnique({
			where: {
				sessionToken: session
			},
			select: { telegramId: true, createdAt: true }
		})

		if (user) {
			event.locals.user = {
				telegramId: user.telegramId,
				createdAt: user.createdAt
			}
		}
	}

	return await resolve(event)
}
