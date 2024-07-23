import type { Action } from './$types'
import { fail, redirect } from '@sveltejs/kit'
import { db } from '$lib/prisma'

const login: Action = async ({ request, cookies }) => {
  const data = await request.formData()
  const telegramId = data.get('telegramId') as string
  const password = data.get('password') as string

  if (!telegramId || !password) {
    return fail(400, {
      error: 'Missing password or telegramId'
    })
  }

  const user = await db.user.findUnique({
    where: {
      telegramId
    }
  })

  if (!user) {
    return fail(400, {
      error: 'User does not exist'
    })
  }

  if (user.passwordHash !== password) {
    return fail(400, {
      error: 'Invalid telegram id or password'
    })
  }

  const sessionId = crypto.randomUUID()
  await db.user.update({
    where: {
      telegramId
    },
    data: {
      sessionToken: sessionId
    }
  })

  cookies.set('session', sessionId, {
    path: '/',
    httpOnly: true,
    sameSite: true,
    maxAge: 60 * 60 * 24 * 7
  })

  redirect(302, '/profile')

}

export const actions = { login }
