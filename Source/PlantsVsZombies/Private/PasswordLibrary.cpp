// PasswordLibrary.cpp

#include "PasswordLibrary.h"
#include "Misc/SecureHash.h"

FString UPasswordLibrary::HashPassword(const FString& Password)
{
	return FMD5::HashAnsiString(*Password);
}