import { StorageError } from '@supabase/storage-js'
import { AuthError, PostgrestError } from '@supabase/supabase-js'

export function checkError(
  error: AuthError | PostgrestError | StorageError | null,
): asserts error is null {
  if (error) {
    throw error
  }
}
