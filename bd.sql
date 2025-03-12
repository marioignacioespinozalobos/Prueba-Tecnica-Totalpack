CREATE DATABASE Prueba;

use Prueba

CREATE TABLE [dbo].[ciudad](
	[IdCiudad] [uniqueidentifier] NOT NULL,
	[Id] [nvarchar](max) NOT NULL,
	[NombreCiudad] [nvarchar](max) NOT NULL,
	[CheckPrincipal] [bit] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]



CREATE TABLE [dbo].[users](
	[Id] [uniqueidentifier] NOT NULL,
	[FullName] [nvarchar](max) NULL,
	[Birth] [datetime2](7) NOT NULL,
	[Email] [nvarchar](max) NULL,
 CONSTRAINT [PK_users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO