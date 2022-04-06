using CodingTask.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<Counters>();
builder.Services.AddSingleton<Database>();

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors(policy => policy.AllowAnyHeader()
                            .AllowAnyOrigin()
                            .AllowAnyMethod()
                            .SetPreflightMaxAge(TimeSpan.FromMinutes(60)));

app.MapControllers();

app.Run();