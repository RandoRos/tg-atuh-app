import * as argon2 from 'argon2'

// Recommended settings by OWASP
const hashingConfig: argon2.Options = {
	parallelism: 1,
	memoryCost: 19 * 1024,
	type: argon2.argon2id,
	timeCost: 2
}

export const hashPassword = async (password: string) => {
  return await argon2.hash(password, hashingConfig)
}

export const verifyPassword = async (hash: string, password: string) => {
  return await argon2.verify(hash, password)
}