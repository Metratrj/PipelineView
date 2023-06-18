FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 5010

ENV ASPNETCORE_URLS=http://+:5010

# Creates a non-root user with an explicit UID and adds permission to access the /app folder
# For more info, please refer to https://aka.ms/vscode-docker-dotnet-configure-containers
RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
# Install NodeJs
RUN apt-get update && \
apt-get install -y wget && \
apt-get install -y gnupg2 && \
wget -qO- https://deb.nodesource.com/setup_20.x | bash - && \
apt-get install -y build-essential nodejs
# End Install

WORKDIR /src
COPY ["PipelineView/PipelineView.csproj", "PipelineView/"]
RUN dotnet restore "PipelineView/PipelineView.csproj"
COPY . .
WORKDIR "/src/PipelineView"
RUN dotnet build "PipelineView.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PipelineView.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PipelineView.dll"]
