#pragma once

#include "CoreMinimal.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "PasswordLibrary.generated.h"

UCLASS()
class PLANTSVSZOMBIES_API UPasswordLibrary : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()

public:
	UFUNCTION(BlueprintPure, Category="Security")
	static FString HashPassword(const FString& Password);
};