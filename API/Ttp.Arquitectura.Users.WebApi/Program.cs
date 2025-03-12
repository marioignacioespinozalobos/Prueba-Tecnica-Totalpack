using Microsoft.EntityFrameworkCore;
using Ttp.Arquitectura.Users.Application.Commands;
using Ttp.Arquitectura.Users.Application.Queries;
using Ttp.Arquitectura.Users.Domain;
using Ttp.Arquitectura.Users.Domain.Interfaces.Repository;
using Ttp.Arquitectura.Users.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register application services
builder.Services.AddScoped<GetUsersHandler>(); // Registro de GetUsersHandler
builder.Services.AddScoped<AddUserHandler>(); // Registro de AddUserHandler
builder.Services.AddScoped<GetUserIdHandler>(); // Registro de GetUserIdHandler
builder.Services.AddScoped<EditUserHandler>(); // Registro de EditUserCommand
builder.Services.AddScoped<DeleteUserHandler>(); // Registro de DeleteUserHandler
builder.Services.AddScoped<GetCiudadesHandler>(); // Registro de GetCiudadesHandler
builder.Services.AddScoped<AddUserCiudadesHandler>(); // Registro de AddUserCiudadesHandler
builder.Services.AddScoped<EditUserCiudadesHandler>(); // Registro de EditUserCiudadesHandler

// Register repository
builder.Services.AddScoped<IGenericRepository<User>, GenericRepository<User>>();
builder.Services.AddScoped<IGenericRepository<Ciudad>, GenericRepository<Ciudad>>();// Registro de IGenericRepository<User>

builder.Services.AddDbContext<UsersContext>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("users-db"));
});

var origenesPermitidos = builder.Configuration.GetValue<string>("OrigenesPermitidos")!.Split(",");

/*

builder.Services.AddCors(opciones =>
{
    opciones.AddDefaultPolicy(politica =>
    {
        politica.WithOrigins(origenesPermitidos).AllowAnyMethod();
    });
});
*/

builder.Services.AddCors(options => {
    options.AddDefaultPolicy(
          policy =>
          {
              policy.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
          });
});



// Register application services

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
